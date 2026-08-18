import React from 'react';
import { Head, router } from '@inertiajs/react';
import ExecutiveLayout from '../../Layouts/ExecutiveLayout';
import BoardroomAnimation from '../../Components/BoardroomAnimation';

export default function Deliberation({ session }) {
    const handleDeliberationComplete = () => {
        router.visit(`/board/${session.id}/resolution`, {
            replace: true,
        });
    };

    return (
        <ExecutiveLayout>
            <Head title="Board Deliberation in Progress — Macix AI" />

            <div className="space-y-6">
                <div className="text-center max-w-xl mx-auto">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                        Executive Session #{String(session.id).padStart(4, '0')}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                        The Board of Advisors is Convened
                    </h1>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        Dilemma: "{session.title || session.brief_text.substring(0, 70) + '...'}"
                    </p>
                </div>

                <BoardroomAnimation onComplete={handleDeliberationComplete} duration={5000} />
            </div>
        </ExecutiveLayout>
    );
}
