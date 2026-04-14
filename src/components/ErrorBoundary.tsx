import * as React from 'react';
import { Component, ReactNode, ErrorInfo } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="rounded-full bg-destructive/10 p-4 text-destructive">
            <AlertTriangle className="h-12 w-12" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Kechirasiz, xatolik yuz berdi</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Sahifani yuklashda muammo yuzaga keldi. Iltimos, sahifani yangilab ko'ring yoki birozdan so'ng qayta urinib ko'ring.
            </p>
          </div>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
            className="gap-2"
          >
            <RefreshCcw className="h-4 w-4" /> Sahifani yangilash
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
