/**
 * Created by wdd on 2016/9/22.
 */
import ViewLoading from '../components/LoadingModal'
import RightClickMenuModal from '../containers/form/components/rigthClickMenuModal'
import ComponentStyleEditor from '../containers/form/components/componentRightClickModal'
import ComponentClickConfirmModal from '../containers/form/components/componentClickConfirmModal'
import Preview from '../containers/form/preView'
import PromptModal from '../containers/form/components/promptModal'

export const VIEW_LOADING = 'view_loading';
export const FORM_MENU_MODAL = 'form_menu_modal';
export const COMPONENT_STYLE_EDITOR = 'component_style_editor';
export const COMPONENT_CLICK_CONFIRM_MODAL = 'component_click_confirm_modal';
export const PREVIEW = 'table_preview';
export const PROMPT_MODAL = 'prompt_modal';
export const overLayMap = {
    "view_loading":ViewLoading,
    "form_menu_modal":RightClickMenuModal,
    "component_style_editor":ComponentStyleEditor,
    "component_click_confirm_modal":ComponentClickConfirmModal,
    "table_preview":Preview,
    "prompt_modal":PromptModal
};