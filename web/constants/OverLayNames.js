/**
 * Created by wdd on 2016/9/22.
 */
import ViewLoading from '../components/LoadingModal'
import RightClickMenuModal from '../containers/form/components/rigthClickMenuModal'

export const VIEW_LOADING = 'view_loading';
export const FORM_MENU_MODAL = 'form_menu_modal';
export const overLayMap = {
    "view_loading":ViewLoading,
    "form_menu_modal":RightClickMenuModal
};