import Copy from "../button/Copy";
import Download from "../button/Download";
import useWillChange from "../../hooks/useWillChange";
import useDynamicImport from "../../hooks/useDynamicImport";
import './style.scss';
import React, {useRef} from "react";

interface Props {
    filename: string,
}

let SVGCase: React.FC<Props> = ({filename}) => {
    let style = useWillChange();
    let [loading, svgHolder] = useDynamicImport(filename);
    let refer = useRef<null | HTMLElement>(null)


    return (
        <div className='svgCon'>
            {/*<img className='svgImage' src={`/svgs/${filename}.svg`} alt={filename}*/}
            {/*    style={style}*/}
            {/*/>*/}
            <i className='svg-wrapper' style={style} ref={refer}>
                {loading ? <div>loading</div> :
                    svgHolder}
            </i>
            <footer className='footer'>
                <Copy refer={refer}/>
                <Download filename={filename}/>
            </footer>
        </div>
    )
}

export default SVGCase;