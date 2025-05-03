import { useRouter } from 'expo-router';

const useNavigation = () => {
    const router = useRouter();

    const goToIndex = () => {
        router.push('/');
    };

    const goToLogin = () => {
        router.push('/login');
    };

    const goToRegister = () => {
        router.push('/register');
    };

    const goBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.push('/');
        }
    };


    return {
        goToIndex,
        goToLogin,
        goToRegister,
        goBack,
    };
};

export default useNavigation;