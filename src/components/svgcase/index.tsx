import Copy from "../button/Copy";
import Download from "../button/Download";
import {SVGInfo} from "../../types/SVGInfo";
import useWillChange from "../../hooks/useWillChange";
import './style.scss';


function SVGCase(props: SVGInfo) {
    const {filename} = props;
    const style = useWillChange();

    return (
        <div className='svgCon'>
            <img className='svgImage' src={`/svgs/${filename}.svg`} alt={filename}
                style={style}
            />
            <footer className='footer'>
                <Copy filename={filename}/>
                <Download filename={filename}/>
            </footer>
        </div>
    )
}


export default SVGCase;