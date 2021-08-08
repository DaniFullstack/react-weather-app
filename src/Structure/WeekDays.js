export default function WeekDays(props) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return <h2>{days[props.day]}</h2>;
};

