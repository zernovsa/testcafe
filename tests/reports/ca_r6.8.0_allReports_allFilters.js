import {test_link} from '../../config.js';
import {t, Selector, ClientFunction} from 'testcafe';
import * as Helper from '../../helper.js';
import * as Helper_local from '../../helpers/ca_r6.7.0_helper';
import * as Selectors from '../../selectors.js';
import * as Selectors_local from '../../selectors/ca_r6.7.0_selectors.js';
import * as Selectors_local2 from '../../selectors/ca_r6.8.0_selectors.js';

var dateFormat = require('dateformat');

fixture `Getting Started`
    .page(test_link);

// логин на страницу
export const login = async () => {
	await t.setTestSpeed(1);
	await Helper.login();
}

// включаем все колонки отчета
export const enableAllColumns = async () => {
	await Helper.enableAllColumns()
}

// инициализация фильтров
export const initFilters = async (menu2) => {
    let filters = await Helper.initFilters(menu2)
    return filters;
}

// выбрать фильтр по индексу или по названию и перебрать все его условия
export const filtersConditionIndexOrName = async (report, filters, value) => {
	var errors = await Helper.filtersConditionIndexOrName(report, filters, value)
    return errors
}

// перекликать все фильтры отчета (в зависимости от того каких колонки в отчете выбраны)
export const clickAllFilters = async (report, filters) => {
    var errors = []
        for (let filterIndex = 0; filterIndex < filters.length; filterIndex++) 
        {
        	var err = await Helper.filtersWhatToDo(report, filters, filterIndex)
            if(err.length !== 0) errors.push(err)
        }
    return errors
}

// выбираем вкладку, в зависимости от отчета
export const clickToMenu = async (menu1, menu2, tabName) => {
    let report = await Helper.clickToMenu(menu1, menu2, tabName);
    return report
}

        // выбрать фильтр по индексу и выбрать фильтр по названию
        test('ca_r6.8.0_filterIndexAndName', async () => {
                await login();
        		let report = await clickToMenu('Общие отчёты', 'Сквозная аналитика', '');
        		await enableAllColumns();
                let filters = await initFilters();
                //await filtersConditionIndexOrName(filters, 0);
                let errors = await filtersConditionIndexOrName(report, filters, 'Качественные');
                console.log(errors)
                if(errors.length !== 0) throw 'TEST FAILED'
            }
        );

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_1', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Сквозная аналитика', '');
		await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_2_1', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Анализ трафика', 'Рекламные кампании');
		await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_2_2', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Анализ трафика', 'Источники');
		await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_2_3', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Анализ трафика', 'Каналы');
		await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_3_1', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Аудитория', 'Информация по сегментам');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_3_2', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Аудитория', 'Список всех посетителей');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_4_1', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Содержание', 'Все страницы сайта');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_4_2', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Содержание', 'Входные страницы');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_5', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Обращения по сотрудникам',  'Статистика');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_6_1', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Распределение входящих звонков', 'По номерам ВАТС');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_6_2', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Распределение входящих звонков', 'По сотрудникам');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_6_3', async () => {
        await login();
		let report = await clickToMenu('Общие отчёты', 'Распределение входящих звонков', 'По сценариям');
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

        // выбрать фильтр по индексу и выбрать фильтр по названию
        test('ca_r6.8.0_filterIndexAndName_2', async () => {
                await login();
                let report = await clickToMenu('Список обращений', 'Звонки', 'По сайтам');
                await enableAllColumns();
                let filters = await initFilters();
                let errors = await filtersConditionIndexOrName(report, filters, 'Номер абонента');
                console.log(errors)
                if(errors.length !== 0) throw 'TEST FAILED'
            }
        );

                // выбрать фильтр по индексу и выбрать фильтр по названию
        test('ca_r6.8.0_filterIndexAndName_3', async () => {
                await login();
                let report = await clickToMenu('Список обращений', 'Звонки', 'По сайтам');
                await enableAllColumns();
                let filters = await initFilters();
                let errors = await filtersConditionIndexOrName(report, filters, 'Трансфер');
                console.log(errors)
                if(errors.length !== 0) throw 'TEST FAILED'
            }
        );

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_7_1', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Звонки', 'По сайтам');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_7_2', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Звонки', 'Все звонки');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_7_3', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Звонки', 'Входящие');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_7_4', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Звонки', 'Исходящие');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_8', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Чаты', 'Чаты');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_9', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Заявки', '');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_10', async () => {
        await login();
		let report = await clickToMenu('Список обращений', 'Цели', '');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_11_1', async () => {
        await login();
		let report = await clickToMenu('Список сделок', '', 'Дата обращения');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_11_2', async () => {
        await login();
		let report = await clickToMenu('Список сделок', '', 'Дата сделки');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_12', async () => {
        await login();
		let report = await clickToMenu('Служебные', 'Запросы к API', '');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

// перебрать все фильтры отчета
test('ca_r6.8.0_allFilters_report_13', async () => {
        await login();
		let report = await clickToMenu('Служебные', 'Уведомления', '');
        await enableAllColumns();
        let filters = await initFilters();
        console.log(filters)
        let errors = await clickAllFilters(report, filters);
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);