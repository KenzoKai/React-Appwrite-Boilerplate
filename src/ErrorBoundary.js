import React from 'react';
import { sendErrorToDiscord } from './errorHandler';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        sendErrorToDiscord(error.message);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Check the Discord channel for error details.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;