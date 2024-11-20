import Image from 'next/image';

export default function Imagem({
    style,
    className,
    onClick,
    src,
    alt = '',
    onError,
}) {
    return (
        <Image
            style={style}
            className={className}
            onClick={onClick}
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw" // Melhora o layout responsivo
            onError={onError}
            priority // Adiciona prioridade por padrão
        />
    );
}
