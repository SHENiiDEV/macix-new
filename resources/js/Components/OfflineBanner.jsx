import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, RefreshCw } from 'lucide-react';

export default function OfflineBanner() {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    const [showReconnected, setShowReconnected] = useState(false);

    useEffect(() => {
        const handleOnline = () => {
            setIsOffline(false);
            setShowReconnected(true);
            const timer = setTimeout(() => setShowReconnected(false), 4000);
            return () => clearTimeout(timer);
        };

        const handleOffline = () => {
            setIsOffline(true);
            setShowReconnected(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (showReconnected) {
        return (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
                <div className="px-4 py-2 bg-emerald-500/90 border border-emerald-400 text-slate-950 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-bold">
                    <Wifi className="w-4 h-4 stroke-[2.5]" />
                    <span>Connection Restored &bull; Executive Session Active</span>
                </div>
            </div>
        );
    }

    if (!isOffline) return null;

    return (
        <div className="fixed top-16 inset-x-0 z-50 animate-fadeIn">
            <div className="bg-rose-500/95 border-b border-rose-400 text-white px-4 py-2.5 shadow-2xl backdrop-blur-md flex items-center justify-between text-xs font-semibold">
                <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <WifiOff className="w-4 h-4 animate-pulse" />
                        <span>
                            Network Connection Interrupted &bull; You are currently in offline mode. Please check your internet connection before submitting deliberations.
                        </span>
                    </div>
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-2.5 py-1 bg-white text-rose-950 rounded-lg text-[11px] font-bold hover:bg-rose-100 transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-3"
                    >
                        <RefreshCw className="w-3 h-3" />
                        <span>Retry</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
