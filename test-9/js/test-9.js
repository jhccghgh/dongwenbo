/**
 * 作者：董文博 | 建立时间：2026-11-04 | 使用大模型：GLM-5.3-Flash | 功能：旅游投诉选项卡切换
 * 结构约定：.dwb_tabs 容器内包含 .dwb_tab_item（选项卡）与 .dwb_tab_panel（内容面板），
 *          按顺序一一对应，选中状态通过 dwb_active 类控制，组件可复用。
 */

/**
 * 函数主要功能：切换到指定索引的选项卡（作者：董文博）。
 * 先清除该组内所有选项卡和面板的选中状态（移除 dwb_active），
 * 然后再设置当前索引对应的选项卡和面板为选中状态。
 */
function dwb_switchTab(dwb_items, dwb_panels, dwb_index) {
    // 1. 先清除所有选项卡及面板的选中状态
    dwb_items.forEach(function (dwb_item) {
        dwb_item.classList.remove('dwb_active');
    });
    dwb_panels.forEach(function (dwb_panel) {
        dwb_panel.classList.remove('dwb_active');
    });
    // 2. 再设置当前元素的选中状态
    dwb_items[dwb_index].classList.add('dwb_active');
    dwb_panels[dwb_index].classList.add('dwb_active');
}

/**
 * 函数主要功能：初始化一组选项卡（可复用入口，作者：董文博）。
 * 为容器内每个选项卡绑定点击监听事件，点击时调用 dwb_switchTab 切换。
 */
function dwb_initTabs(dwb_container) {
    var dwb_items = dwb_container.querySelectorAll('.dwb_tab_item');
    var dwb_panels = dwb_container.querySelectorAll('.dwb_tab_panel');

    // 为每个选项卡注册点击监听事件
    dwb_items.forEach(function (dwb_item, dwb_index) {
        dwb_item.addEventListener('click', function () {
            dwb_switchTab(dwb_items, dwb_panels, dwb_index);
        });
    });
}

// 函数主要功能：页面加载完成后初始化所有 .dwb_tabs 选项卡组（作者：董文博）
document.querySelectorAll('.dwb_tabs').forEach(dwb_initTabs);
