import preloader from "./../../assets/icons/preloader.svg";

//Прелоадер для заглушки во время ожидания ответа с сервера
const Preloader = () => {
    return (
        <img src={`${preloader}`} alt="Загрузка" style={{maxWidth: "200px", width: "100%", margin: "0 auto"}}/>
    )
}

export default Preloader;