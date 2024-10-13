import PropTypes from "prop-types";


export default function ArtPanel({leftSide, description, imageSrc}) {
    if (leftSide) {
        return (
            <div className="sketch2Box">
                <div className="leftSide">
                    <div className="boxTitle">Bucket and Pepper</div>
                    <p className="leftText">
                        {description}
                    </p>
                </div>
                <img className="sketch1" src={imageSrc} alt={"some kind of visual"}/>
            </div>
        )
    } else {
        return (
            <div className="sketch2Box">
                <img className="sketch2" src={imageSrc} alt={"some kind of visual"}/>
                <div className="rightSide">
                    <div className="boxTitle">The Cube and the Apple</div>
                    <p className="leftText">
                        {description}
                    </p>
                </div>
            </div>
        )
    }
}

ArtPanel.propTypes = {
    leftSide: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
}