
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
    [ {key:"s",value: 'Сдержаный'}, {key:"d", value: 'Сильный'}, {key: "c", value: 'Заботливый'}, {key:"i", value: 'Экспрессивный'}],
    [ {key:"d",value: 'Первопроходец'}, {key:"c", value: 'Корректный'}, {key: "i", value: 'Восторженный'}, {key:"s", value: 'Удовлетворенный'}],
    [ {key:"s",value: 'Старательный'}, {key:"i", value: 'Воодушевленный'}, {key: "d", value: 'Смелый'}, {key:"c", value: 'Точный'}],
    [ {key:"d",value: 'Спорщик'}, {key:"c", value: 'Сомневающийся'}, {key: "s", value: 'Нерешительный'}, {key:"i", value: 'Непредсказуемый'}],
    [ {key:"c",value: 'Уважительный'}, {key:"i", value: 'Общительный'}, {key: "s", value: 'Терпеливый'}, {key:"d", value: 'Отважный'}],
    [ {key:"i",value: 'Убедительный'}, {key:"d", value: 'Самонадеянный'}, {key: "c", value: 'Логичный'}, {key:"s", value: 'Мягкий'}],
    [ {key:"c",value: 'Осторожный'}, {key:"s", value: 'Ровный'}, {key: "d", value: 'Решительный'}, {key:"i", value: 'Компанейский'}],
    [ {key:"i",value: 'Популярный'}, {key:"d", value: 'Напористый'}, {key: "c", value: 'Перфекционист'}, {key:"s", value: 'Искренний'}],
   
 ]