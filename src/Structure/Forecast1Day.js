import './Forecast1Day.css'
import WeekDays from "./WeekDays";
import ImageLogos from "./ImageLogos";


export default function Forecast1Day(props) {

    return (
        <div className="forecastDay">
            <WeekDays day={props.day} />
            <ImageLogos icon={props.icon} id="logo" />

            <div>
                <span className="temp">{props.temperature}°c</span>
                <span className="description"> {props.description}</span>
            </div>
        </div>
    );
}

