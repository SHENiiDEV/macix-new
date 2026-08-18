import React from 'react';
import { Calendar, UserCheck, Target, CheckCircle2 } from 'lucide-react';

export default function ActionPlanTable({ items }) {
    if (!items || !Array.isArray(items) || items.length === 0) {
        return (
            <div className="p-6 text-center text-xs text-slate-500 bg-slate-900/40 rounded-xl border border-slate-800">
                No structured action plan records available for this session.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0c111e] shadow-xl">
            <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900/90 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-800">
                    <tr>
                        <th className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                                <span>Phase / Timeline</span>
                            </div>
                        </th>
                        <th className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5">
                                <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                                <span>Accountable Lead</span>
                            </div>
                        </th>
                        <th className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5">
                                <Target className="w-3.5 h-3.5 text-amber-400" />
                                <span>Mandatory Strategic Action</span>
                            </div>
                        </th>
                        <th className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Target Milestone</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                    {items.map((item, index) => (
                        <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-4 px-4 font-mono font-bold text-amber-400/90 whitespace-nowrap">
                                {item.timeline || `Phase ${index + 1}`}
                            </td>
                            <td className="py-4 px-4 font-medium text-slate-200 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px]">
                                    {item.owner || 'CEO / Executive Lead'}
                                </span>
                            </td>
                            <td className="py-4 px-4 text-slate-300 leading-relaxed max-w-md">
                                {item.action}
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    {item.milestone || 'Verified'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
