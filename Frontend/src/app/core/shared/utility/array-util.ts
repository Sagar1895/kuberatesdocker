export class ArrayUtil {

    /* To convert keys to lowercase */
    public static convertKeyToLowerCase = (data: any) => {
        return Object.fromEntries(
            Object.entries(data[0]).map(([key, value]) => [key.toLowerCase(), value])
        );
    }

}
