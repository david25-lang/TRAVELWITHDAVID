import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // eslint-disable-next-line no-console
    console.error('Unhandled error:', error, info);
  }

  render() {
    const { hasError, error, info } = this.state;
    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white text-slate-950 p-6">
          <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Application Error</h2>
            <p className="text-sm text-slate-600 mb-4">Something went wrong while rendering the app. Details:</p>
            <pre className="whitespace-pre-wrap text-xs text-slate-700">{String(error && error.toString())}</pre>
            {info?.componentStack ? <pre className="whitespace-pre-wrap text-xs text-slate-600 mt-4">{info.componentStack}</pre> : null}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
