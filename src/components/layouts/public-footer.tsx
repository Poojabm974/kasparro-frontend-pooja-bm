import Link from "next/link";
import { Leaf, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
    product: [
        { label: "Platform", href: "/platform" },
        { label: "Dashboard", href: "/app/dashboard" },
        { label: "AI Audit", href: "/app/audit" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
    ],
    resources: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "System Status", href: "#" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
];

export function PublicFooter() {
    return (
        <footer className="border-t border-[#0d6b5e]/10 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#0d6b5e] flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-oracle font-semibold">Kasparro</span>
                        </Link>
                        <p className="text-[#5a6b5a] text-sm max-w-xs mb-6 leading-relaxed">
                            The Living Algorithm for AI-native SEO.
                            Transform your brand data into organic insight.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-[#0d6b5e]/5 hover:bg-[#0d6b5e] hover:text-white flex items-center justify-center transition-all text-[#5a6b5a]"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4 text-[#1a2e1a]">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#5a6b5a] hover:text-[#0d6b5e] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4 text-[#1a2e1a]">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#5a6b5a] hover:text-[#0d6b5e] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-4 text-[#1a2e1a]">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#5a6b5a] hover:text-[#0d6b5e] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-[#0d6b5e]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#5a6b5a]">
                        © {new Date().getFullYear()} Kasparro. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-[#5a6b5a]">
                        <Link href="#" className="hover:text-[#0d6b5e] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-[#0d6b5e] transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
