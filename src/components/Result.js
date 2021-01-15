
const result =()=> {
    console.log('counter', counter)
    return (
        <>
        <p> D = {counter.d}</p>
        <p> I = {counter.i}</p>
        <p> S = {counter.s}</p>
        <p> C = {counter.c}</p>
        {console.log('counter', counter)}
        </>
    )
}

const answers = [
    [ {key:"c",value: 'Сдержаный'}, {key:"d", value: 'Сильный'}, {key: "s", value: 'Заботливый'}, {key:"i", value: 'Экспрессивный'}],
    [ {key:"d",value: 'Первопроходец'}, {key:"c", value: 'Корректный'}, {key: "i", value: 'Восторженный'}, {key:"s", value: 'Удовлетворенный'}],
    [ {key:"s",value: 'Старательный'}, {key:"i", value: 'Воодушевленный'}, {key: "d", value: 'Смелый'}, {key:"c", value: 'Точный'}],
    [ {key:"d",value: 'Спорщик'}, {key:"c", value: 'Сомневающийся'}, {key: "s", value: 'Нерешительный'}, {key:"i", value: 'Непредсказуемый'}],
    [ {key:"c",value: 'Уважительный'}, {key:"i", value: 'Общительный'}, {key: "s", value: 'Терпеливый'}, {key:"d", value: 'Отважный'}],
    [ {key:"i",value: 'Убедительный'}, {key:"d", value: 'Самонадеянный'}, {key: "c", value: 'Логичный'}, {key:"s", value: 'Мягкий'}],
    [ {key:"c",value: 'Осторожный'}, {key:"s", value: 'Ровный'}, {key: "d", value: 'Решительный'}, {key:"i", value: 'Компанейский'}],
    [ {key:"i",value: 'Популярный'}, {key:"d", value: 'Напористый'}, {key: "c", value: 'Перфекционист'}, {key:"s", value: 'Искренний'}],
    [ {key:"i",value: 'Яркий '}, {key:"c", value: 'Скромный'}, {key: "s", value: 'Покладистый '}, {key:"d", value: 'Непреклонный'}],
    [ {key:"c",value: 'Педантичный '}, {key:"i", value: 'Оптимистичный'}, {key: "d", value: 'Настойчивый '}, {key:"s", value: 'Уживчивый'}],
    [ {key:"d",value: 'Непреклонный '}, {key:"c", value: 'Смиренный'}, {key: "s", value: 'Гостеприимный '}, {key:"i", value: 'Болтливый'}],
    [ {key:"s",value: 'Дружелюбный '}, {key:"c", value: 'Внимательный'}, {key: "i", value: 'Игривый '}, {key:"d", value: 'Волевой'}],
    [ {key:"i",value: 'Обаятельный '}, {key:"d", value: 'Рискующий'}, {key: "c", value: 'Дисциплинированный '}, {key:"s", value: 'Осмотрительный'}],
    [ {key:"c",value: 'Сдержанный '}, {key:"s", value: 'Постоянный'}, {key: "d", value: 'Напористый '}, {key:"i", value: 'Привлекательный'}],
    [ {key:"i",value: 'Восторженный '}, {key:"c", value: 'Аналитичный'}, {key: "s", value: 'Сочувствующий '}, {key:"d", value: 'Решительный'}],
    [ {key:"d",value: 'Руководящий '}, {key:"i", value: 'Импульсивный'}, {key: "s", value: 'Неторопливый '}, {key:"c", value: 'Критичный'}],
    [ {key:"c",value: 'Последовательный '}, {key:"d", value: 'Твердый'}, {key: "i", value: 'Живой '}, {key:"s", value: 'Инертный'}],
    [ {key:"i",value: 'Влиятельный '}, {key:"s", value: 'Добрый'}, {key: "d", value: 'Независимый '}, {key:"c", value: 'Организованный'}],
    [ {key:"c",value: 'Идеалист '}, {key:"i", value: 'Популярный'}, {key: "s", value: 'Приятный '}, {key:"d", value: 'Прямой'}],
    [ {key:"d",value: 'Нетерпеливый '}, {key:"c", value: 'Серьезный'}, {key: "s", value: 'Медлительный '}, {key:"i", value: 'Эмоциональный'}],
    [ {key:"d",value: 'Соперничающий '}, {key:"i", value: 'Спонтанный'}, {key: "s", value: 'Преданный '}, {key:"c", value: 'Задумчивый'}],
    [ {key:"c",value: 'Самоотверженный '}, {key:"s", value: 'Деликатный'}, {key: "i", value: 'Убедительный '}, {key:"d", value: 'Мужественный'}],
    [ {key:"s",value: 'Зависимый '}, {key:"i", value: 'Легкомысленный'}, {key: "c", value: 'Выносливый '}, {key:"d", value: 'Подавляющий'}],
    [ {key:"s",value: 'Толерантный '}, {key:"c", value: 'Щепетильный'}, {key: "i", value: 'Вдохновляющий '}, {key:"d", value: 'Направляющий'}],
   
 ]