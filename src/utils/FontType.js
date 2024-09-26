import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from 'expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export const FontType = {
    mainTopic: 'Roboto_700Bold',
    subTopic: 'Roboto_500Medium',
    paragraph: 'Roboto_400Regular',
};

export function LoadFonts() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return null;
}
