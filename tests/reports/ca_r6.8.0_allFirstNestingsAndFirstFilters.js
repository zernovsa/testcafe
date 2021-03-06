import {test_link, firstNestingTree, secondNestingTree} from '../../config.js';
import {t, Selector, ClientFunction} from 'testcafe';
import * as Helper from '../../helper.js';
import * as Helper_local from '../../helpers/ca_r6.7.0_helper';
import * as Selectors from '../../selectors.js';
import * as Selectors_local from '../../selectors/ca_r6.7.0_selectors.js';
import * as Selectors_local2 from '../../selectors/ca_r6.8.0_selectors.js';


fixture `Getting Started`
    .page(test_link);


// логин на страницу
export const login = async () => {
    await t.setTestSpeed(1);
    await Helper.login();
}

// выбираем вкладку, в зависимости от отчета
export const clickToMenu = async (menu1, menu2, tabName) => {
    await Helper.clickToMenu(menu1, menu2, tabName);
}

// включаем все колонки отчета
export const enableAllColumns = async () => {
    await Helper.enableAllColumns()
}

// инициализация дерева первого измерения
export const initFirstNestingTree = async () => {
    let tree = await Helper.initFirstNestingTree()
    return tree
}

// чтобы выбрать не включение подстроки, а конкретную строку дерева
import escapeRegExp from 'lodash/escapeRegExp';

// вспомогательная функция, смотрит подстроку в строке
function getWholeTextRe(text) {
    return new RegExp(`^${escapeRegExp(text)}$`);
}

// функция добавляет первое измерение
export const addFirstNesting = async (tree, index1, index2, index3) => {
    let flag = await Helper.addFirstNesting(tree, index1, index2, index3)
    return flag
}

// функция добавляет первое измерение
export const allFirstNestingsAndFirstFilters = async (report, tree) => {
    let flag = await Helper.allFirstNestingsAndFirstFilters(report, tree)
    return flag
}

// тест на все первые измерения отчета "Анализ трафика"
test('ca_r6.8.0_allFirstNestingsAndFirstFilters_report_1', async () => {
        await login();
        let report = await  clickToMenu('Общие отчёты', 'Анализ трафика', '');
        await enableAllColumns();
        let tree = await initFirstNestingTree()
        console.log(tree)
        let errors = await allFirstNestingsAndFirstFilters(report, tree)
        console.log(errors)
        if(errors.length !== 0) throw 'TEST FAILED'
    }
);