import { useState } from 'react';

const useToast = () => {
    const [toast, setToast] = useState(false);

    const showToast = () => setToast(true);
    const hideToast = () => setToast(false);

    return { toast, showToast, hideToast };
};

export default useToast;