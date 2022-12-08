import Copy from "../button/Copy";
import Download from "../button/Download";
import useWillChange from "../../hooks/useWillChange";
import useDynamicImport from "../../hooks/useDynamicImport";
import './style.scss';
import React, {useRef} from "react";

interface SVGInfo{
    filename: string,
}


function SVGCase(props: SVGInfo) {
    const {filename} = props;
    const style = useWillChange();
    const [loading, svgHolder] = useDynamicImport(filename);
    const refer = useRef<null | HTMLElement>(null)


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