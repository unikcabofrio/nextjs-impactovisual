'use server';

import crypto from 'crypto';

let cache = null;
let cacheHash = null;
let lastFetchTime = 0;

// Função para construir a URL da API
function buildURL() {
    const sheet_url = process.env.NEXT_PUBLIC_SHEET_URL;
    const sheet_id = process.env.NEXT_PUBLIC_SHEET_ID;
    return sheet_url.replace('::ID', sheet_id);
}

// Função para construir headers e opções de request
function buildRequestOptions(sheetName, uuid) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        sheetName,
        type: "ser",
        uuid
    });

    return {
        method: "POST",
        headers,
        body: raw,
        redirect: "follow"
    };
}

// Função para atualizar o cache em segundo plano
async function updateCache(sheetName, uuid) {
    const URL = buildURL();
    const requestOptions = buildRequestOptions(sheetName, uuid);

    try {
        const response = await fetch(URL, requestOptions);
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const newHash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

        // Atualiza o cache somente se o hash for diferente
        if (newHash !== cacheHash) {
            console.log("Alterações detectadas. Atualizando o cache.");
            cache = data;
            cacheHash = newHash;
            lastFetchTime = Date.now();
        } else {
            console.log("Sem alterações detectadas. Cache mantido.");
        }
    } catch (error) {
        console.error(`Erro ao atualizar o cache para ${sheetName}:`, error.message);
    }
}

// Função principal para obter dados
export async function getAPI(sheetName, uuid = "") {
    // Se o cache não for nulo, retorna imediatamente
    if (sheetName === "products" && cache !== null) {
        console.log("Retornando dados do cache.");
        // Atualiza o cache em segundo plano
        updateCache(sheetName, uuid);
        return cache;
    }

    // Se o cache for nulo ou o sheetName não for "products", faz a requisição normalmente
    const URL = buildURL();
    const requestOptions = buildRequestOptions(sheetName, uuid);

    try {
        const response = await fetch(URL, requestOptions);
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Atualiza o cache se necessário (somente para "products")
        if (sheetName === "products") {
            const newHash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
            if (newHash !== cacheHash) {
                cache = data;
                cacheHash = newHash;
                lastFetchTime = Date.now();
                console.log("Cache atualizado após requisição inicial.");
            }
        }

        return data;
    } catch (error) {
        console.error(`Erro ao obter dados para ${sheetName}:`, error.message);
        throw error;
    }
}
