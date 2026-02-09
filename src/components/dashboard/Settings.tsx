import { useState } from 'react';
import { User, Bell, Shield, Save } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-brand-light border-2 border-brand-teal/20 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                                <img src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=0F172A&color=fff&size=128" alt="Profile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xs font-bold">Change</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-brand-navy">Sarah Johnson</h3>
                                <p className="text-sm text-text-secondary">Student Researcher</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
                                <input type="text" defaultValue="Sarah Johnson" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                                <input type="email" defaultValue="sarah.j@yrif.tz" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" />
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Institution</label>
                                <input type="text" defaultValue="University of Dar es Salaam" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" />
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Bio</label>
                                <textarea rows={4} defaultValue="Passionate about AI and agricultural innovation." className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50 resize-none"></textarea>
                            </div>
                        </div>
                    </div>
                );
            case 'notifications':
                return (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-4">
                            {['Email Notifications', 'Push Notifications', 'Weekly Digest', 'Mentor Updates'].map((item) => (
                                <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <span className="font-medium text-brand-navy">{item}</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-teal/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-teal"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'security':
                return (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-4">
                            <button className="w-full text-left p-4 bg-gray-50 hover:bg-white border border-gray-100 rounded-xl transition-all flex justify-between items-center group">
                                <span className="font-medium text-brand-navy">Change Password</span>
                                <span className="text-xs font-bold text-brand-blue group-hover:underline">Update</span>
                            </button>
                            <button className="w-full text-left p-4 bg-gray-50 hover:bg-white border border-gray-100 rounded-xl transition-all flex justify-between items-center group">
                                <span className="font-medium text-brand-navy">Two-Factor Authentication</span>
                                <span className="text-xs font-bold text-red-500">Disabled</span>
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-brand-navy">Account Settings</h1>
                    <p className="text-text-secondary text-sm">Manage your profile and preferences</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-navy text-white rounded-xl text-sm font-bold shadow-lg hover:bg-brand-dark transition-all">
                    <Save size={18} />
                    Save Changes
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'profile' ? 'border-brand-teal text-brand-teal bg-teal-50/10' : 'border-transparent text-gray-500 hover:text-brand-navy'}`}
                    >
                        <User size={18} />
                        Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'notifications' ? 'border-brand-teal text-brand-teal bg-teal-50/10' : 'border-transparent text-gray-500 hover:text-brand-navy'}`}
                    >
                        <Bell size={18} />
                        Notifications
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'security' ? 'border-brand-teal text-brand-teal bg-teal-50/10' : 'border-transparent text-gray-500 hover:text-brand-navy'}`}
                    >
                        <Shield size={18} />
                        Security
                    </button>
                </div>

                <div className="p-6 md:p-8">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default Settings;
