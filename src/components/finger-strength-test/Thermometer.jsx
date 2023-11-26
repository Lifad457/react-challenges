import React from "react"
import { Explosion, Stem, StemSegment, ThermometerBase, ThermometerWrapper } from "../../styles/finger-strength/finger-strength.css"

export default function Thermometer({ time }) {
    
	let stemSegmentStyles = {}
	let baseContent = "🧐"
    let segmentContent = ""
    let optionalClass = ""
    
    if (time >= 13) {
        optionalClass = "wobble-hor-bottom"
    } else if (time >= 12 && time < 13) {
        optionalClass="shake-horizontal-fast"
    } else if (time >= 10 && time < 12) {
        optionalClass="shake-horizontal-slow"
    } 
    
    if (time > 13) {
        segmentContent = <Explosion>🔥</Explosion>
    } else if (time > 12) {
        segmentContent = <Explosion>💥</Explosion>
    }
    
    switch(true) {
        case time >= 30:
            baseContent = "👻"
            break;
        case time >= 17:
            baseContent = "☠️"
            break;
        case time >= 13:
            baseContent = "😵"
            break;
        case time >= 10:
            baseContent = "🤯"
            break;
        case time >= 8:
            baseContent = "😱"
            break;
        case time >= 6:
            baseContent = "😲"
            break;
        case time >= 4:
            baseContent = "😯"
            break;
        case time >= 2:
            baseContent = "🥱"
            break;
        case time > 0:
            baseContent = "🙄"
            break;
        default: 
            baseContent = "🧐"
            break
    }

	if (time >= 9) {
		stemSegmentStyles = {
			height: "100%",
			borderTopLeftRadius: "20px",
			borderTopRightRadius: "20px",
            transitionProperty: "height, border-top-right-radius, border-top-left-radius"
		}
	} else {
        const pixels = +(Math.floor(20*time))
		stemSegmentStyles = {
			height: `${pixels}px`,
			borderTopLeftRadius: "0px",
			borderTopRightRadius: "0px",
		}
        if (time === 0) {
            stemSegmentStyles.transitionProperty = "height"
        }
	}

	return (
		<ThermometerWrapper className={`${optionalClass}`}>
			<Stem>
				<StemSegment style={stemSegmentStyles}>{segmentContent}</StemSegment>
			</Stem>
			<ThermometerBase><p>{baseContent}</p></ThermometerBase>
		</ThermometerWrapper>
	)
}
