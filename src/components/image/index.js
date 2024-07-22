import Image from 'next/image';
export default function Imagem(props) {
    return <Image
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        src={props.src}
        alt={props.alt ? props.alt : ''}
        size={'cover'}
        width={0}
        height={0}
        onError={props.onError && props.onError}
        // priority
    />
}