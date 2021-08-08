export default function ImageLogos(props) {
    return <img src={require(`../icons/${props.icon}.png`).default} />
};