import {test_link, secondNestingTree} from '../../config.js';
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
export const filtersConditionIndexOrName = async (filters, value) => {
	await Helper.filtersConditionIndexOrName(filters, value)
}

// перекликать все фильтры отчета (в зависимости от того каких колонки в отчете выбраны)
export const clickAllFilters = async (filters) => {
    for (let filterIndex = 0; filterIndex < filters.length; filterIndex++) 
    	await Helper.filtersWhatToDo(filters, filterIndex)
}

// выбираем вкладку, в зависимости от отчета
export const clickToMenu = async (menu1, menu2, tabName) => {
    let report = await Helper.clickToMenu(menu1, menu2, tabName);
    return report
}

// вывод дерева в консоль
export const consolelogSecondNestingTree = async (tree) => {
    //Вывод дерева
    console.log('Дерево: ')
    for (var i = 0; i < tree.length; i++) {
        console.log(tree[i])
    }
}

//инициализация дерева второго измерения
export const initSecondNestingTree = async (menu1, menu2, tabName) => {
    let tree2 = await Helper.initSecondNestingTree(menu1, menu2, tabName)
    return tree2;
}

// функция перебирающая все вторые измерения и фильyр по этому измерению
export const addSecondNesting = async (tree2, index1, index2, index3) => {
    let flag = await Helper.addSecondNesting(tree2, index1, index2, index3) 
    return flag   
}


// функция которая перебирает все значения второго измерения и перекликивает фильтр по этому измерению
export const allSecondNesting = async (tree2) => {
    await Helper.allSecondNesting(tree2)
}

// функция которая перебирает все значения второго измерения и перекликивает фильтр по этому измерению
export const secondNestingFilters = async (report, tree2) => {
    let errors = await Helper.secondNestingFilters(report, tree2)
    return errors
}


test('ca_r6.8.0_secondNestingFilters_report_1', async () => {
   		await login();
		let report = await clickToMenu('Общие отчёты', 'Сквозная аналитика', '');
        await t.click(Selector('a').withText('Яндекс.Директ [интегрированная]'))
		await enableAllColumns();
		let tree2 = await initSecondNestingTree('Общие отчёты', 'Сквозная аналитика', '')
		//await consolelogSecondNestingTree(tree2)
        let errors = await secondNestingFilters(report, tree2)
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

test('ca_r6.8.0_secondNestingFilters_report_1_2', async () => {
        await login();
        let report = await clickToMenu('Общие отчёты', 'Сквозная аналитика', '');
        await t.click(Selector('a').withText('Яндекс.Директ [интегрированная]'))
        await enableAllColumns();
        let tree2 = await initSecondNestingTree('Общие отчёты', 'Сквозная аналитика', '')
        //await consolelogSecondNestingTree(tree2)
        let errors = await secondNestingFilters(report, tree2)
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

test('ca_r6.8.0_secondNestingFilters_report_2_1', async () => {
        await login();
        let report = await clickToMenu('Общие отчёты', 'Анализ трафика', 'Рекламные кампании');
        await t.click(Selector('a').withText('Яндекс.Директ [интегрированная]'))
        await enableAllColumns();
        let tree2 = await initSecondNestingTree('Общие отчёты', 'Анализ трафика', 'Рекламные кампании')
        //await consolelogSecondNestingTree(tree2)
        console.log(tree2)
        let errors =  await secondNestingFilters(report, tree2)
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);

test('ca_r6.8.0_secondNestingFilters_report_2_1_2', async () => {
        await login();
        let report = await clickToMenu('Общие отчёты', 'Анализ трафика', 'Рекламные кампании');
        await t.click(Selector('a').withText('Яндекс.Директ [интегрированная]'))
        await enableAllColumns();
        let tree2 = await initSecondNestingTree('Общие отчёты', 'Анализ трафика', 'Рекламные кампании')
        //await consolelogSecondNestingTree(tree2)
        console.log(tree2)
        let errors =  await secondNestingFilters(report, tree2)
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);





