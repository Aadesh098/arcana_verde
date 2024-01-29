import { useCallback, useEffect, useState } from "react";
import { authProvider, emails } from "../../providers";

export const useAutoLoginForDemo = () => {
    const [isLoading, setIsLoading] = useState(true);

    const login = useCallback(async () => {
        const email = localStorage.getItem("auto_login") || emails[0];
        try {
            await authProvider.login({ email });
        } catch (error) {
            // Log or handle the error if needed
            console.error("Auto-login error:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const shouldLogin = localStorage.getItem("auto_login") !== "false";
        if (!shouldLogin) {
            setIsLoading(false);
            return;
        }

        login();
    }, [login]);

    return { loading: isLoading };
};

export const enableAutoLogin = (email: string) => {
    localStorage.setItem("auto_login", email);
};

export const disableAutoLogin = () => {
    localStorage.setItem("auto_login", "false");
};
