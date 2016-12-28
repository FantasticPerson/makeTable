/**
 * Created by wdd on 2016/12/27.
 */
export default function (value) {
    if(!value) return value;

    return value.charAt(0).toUpperCase() + value.substr(1);
}
