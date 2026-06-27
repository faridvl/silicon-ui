import * as React from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
}
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "primary" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}
declare function AspectRatio({ ratio, className, children, style, ...props }: AspectRatioProps): React.JSX.Element;
declare namespace AspectRatio {
    var displayName: string;
}

declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof avatarVariants> {
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;

declare const badgeVariants: (props?: ({
    variant?: "primary" | "success" | "warning" | "danger" | "info" | "dark" | "light" | null | undefined;
    size?: "sm" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): React.JSX.Element;

declare const Breadcrumb: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLOListElement> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>): React.JSX.Element;
    displayName: string;
};

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultIndex?: number;
    loop?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselIndicators: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: 'start' | 'end' | 'center';
}
declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: 'start' | 'end' | 'center';
}
declare const DropdownContent: React.ForwardRefExoticComponent<DropdownContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownItem: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
declare const DropdownSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const iconVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof iconVariants> {
    name: string;
    type?: 'regular' | 'solid' | 'logos';
}
declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>>;

declare const inputVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    inputSize?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const textareaVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
declare const Label: React.ForwardRefExoticComponent<React.LabelHTMLAttributes<HTMLLabelElement> & React.RefAttributes<HTMLLabelElement>>;
declare const FormGroup: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FormHint: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const FormError: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closeOnOverlayClick?: boolean;
}
declare function Modal({ open, onOpenChange, children, size, closeOnOverlayClick, }: ModalProps): React.ReactPortal | null;
declare namespace Modal {
    var displayName: string;
}
declare const ModalHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ModalTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const ModalDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const ModalBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ModalFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
}
declare const PaginationButton: React.ForwardRefExoticComponent<PaginationButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const PaginationPrevious: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const PaginationNext: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare function PaginationEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
declare namespace PaginationEllipsis {
    var displayName: string;
}

declare const progressIndicatorVariants: (props?: ({
    variant?: "primary" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressIndicatorVariants> {
    value?: number;
    max?: number;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    inputSize?: 'sm' | 'md' | 'lg';
    error?: boolean;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
}
declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;

declare const Skeleton: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const spinnerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof spinnerVariants> {
    label?: string;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLSpanElement>>;

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;

type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
interface ToastData {
    id: string;
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
    duration?: number;
    action?: React.ReactNode;
}
interface ToastContextValue {
    toast: (data: Omit<ToastData, 'id'>) => string;
    dismiss: (id: string) => void;
}
declare function useToast(): ToastContextValue;
interface ToastProviderProps {
    children: React.ReactNode;
    position?: ToastPosition;
    maxToasts?: number;
}
declare function ToastProvider({ children, position, maxToasts, }: ToastProviderProps): React.JSX.Element;
declare namespace ToastProvider {
    var displayName: string;
}
declare const toastVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;

interface TooltipProviderProps {
    children: React.ReactNode;
    delay?: number;
}
declare function TooltipProvider({ children, delay }: TooltipProviderProps): React.JSX.Element;
declare namespace TooltipProvider {
    var displayName: string;
}
interface TooltipProps {
    content: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
    children: React.ReactNode;
}
declare function Tooltip({ content, side, delay, className, children }: TooltipProps): React.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}
declare const TooltipTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
interface TooltipContentProps extends React.HTMLAttributes<HTMLSpanElement> {
    side?: 'top' | 'bottom' | 'left' | 'right';
}
declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLSpanElement>>;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "danger" | "dark" | "light" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "icon" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

type HeroVariant = 'saas' | 'agency' | 'app' | 'financial' | 'minimal';
interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: HeroVariant;
    badge?: string;
    headline: string;
    subheadline: string;
    ctaPrimary: {
        label: string;
        href: string;
    };
    ctaSecondary?: {
        label: string;
        href: string;
    };
    media?: {
        type: 'image' | 'lottie' | 'video';
        src: string;
        alt?: string;
    };
}
declare const HeroSection: React.ForwardRefExoticComponent<HeroSectionProps & React.RefAttributes<HTMLElement>>;

interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}
declare const sectionCva$5: (props?: ({
    variant?: "gray" | "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type FeaturesVariant = 'light' | 'dark' | 'gray';
type FeaturesIconStyle = 'boxed' | 'circle' | 'flat';
interface FeaturesGridProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionCva$5> {
    badge?: string;
    headline: string;
    subheadline?: string;
    columns?: 2 | 3 | 4;
    features: FeatureItem[];
    iconStyle?: FeaturesIconStyle;
}
declare const FeaturesGrid: React.ForwardRefExoticComponent<FeaturesGridProps & React.RefAttributes<HTMLElement>>;

interface PricingPlan {
    name: string;
    price: {
        monthly: number;
        annual: number;
    };
    currency: string;
    description: string;
    features: string[];
    cta: {
        label: string;
        href: string;
    };
    highlighted?: boolean;
    badge?: string;
}
type PricingVariant = 'light' | 'dark' | 'gray';
interface PricingSectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: PricingVariant;
    badge?: string;
    headline: string;
    subheadline?: string;
    plans: PricingPlan[];
    annualDiscount?: string;
}
declare const PricingSection: React.ForwardRefExoticComponent<PricingSectionProps & React.RefAttributes<HTMLElement>>;

interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
    company?: string;
    avatar?: string;
    rating?: 1 | 2 | 3 | 4 | 5;
}
type TestimonialsVariant = 'light' | 'dark' | 'gray';
type TestimonialsLayout = 'carousel' | 'grid';
interface TestimonialsCarouselProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TestimonialsVariant;
    layout?: TestimonialsLayout;
    badge?: string;
    headline: string;
    subheadline?: string;
    testimonials: TestimonialItem[];
}
declare const TestimonialsCarousel: React.ForwardRefExoticComponent<TestimonialsCarouselProps & React.RefAttributes<HTMLElement>>;

type CTABannerVariant = 'primary' | 'dark' | 'gradient';
interface CTABannerProps extends React.HTMLAttributes<HTMLElement> {
    variant?: CTABannerVariant;
    headline: string;
    subheadline?: string;
    ctaPrimary: {
        label: string;
        href: string;
    };
    ctaSecondary?: {
        label: string;
        href: string;
    };
}
declare const CTABanner: React.ForwardRefExoticComponent<CTABannerProps & React.RefAttributes<HTMLElement>>;

type StatsSectionVariant = 'light' | 'dark' | 'gray';
type StatsSectionLayout = 'row' | 'grid';
interface StatItem {
    value: string;
    label: string;
    suffix?: string;
}
declare const sectionCva$4: (props?: ({
    variant?: "gray" | "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatsSectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionCva$4> {
    layout?: StatsSectionLayout;
    stats: StatItem[];
    headline?: string;
}
declare const StatsSection: React.ForwardRefExoticComponent<StatsSectionProps & React.RefAttributes<HTMLElement>>;

interface FAQItem {
    question: string;
    answer: string;
}
declare const sectionCva$3: (props?: ({
    variant?: "gray" | "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type FAQVariant = 'light' | 'dark' | 'gray';
interface FAQAccordionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionCva$3> {
    badge?: string;
    headline: string;
    items: FAQItem[];
}
declare const FAQAccordion: React.ForwardRefExoticComponent<FAQAccordionProps & React.RefAttributes<HTMLElement>>;

interface LogoItem {
    name: string;
    src: string;
    href?: string;
}
declare const sectionCva$2: (props?: ({
    variant?: "gray" | "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type LogoCloudVariant = 'light' | 'dark' | 'gray';
interface LogoCloudProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionCva$2> {
    headline?: string;
    logos: LogoItem[];
}
declare const LogoCloud: React.ForwardRefExoticComponent<LogoCloudProps & React.RefAttributes<HTMLElement>>;

interface FooterLink {
    label: string;
    href: string;
}
interface FooterColumn {
    title: string;
    links: FooterLink[];
}
interface FooterSocial {
    platform: string;
    href: string;
}
declare const sectionCva$1: (props?: ({
    variant?: "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type FooterSectionVariant = 'light' | 'dark';
interface FooterSectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionCva$1> {
    logo?: string;
    tagline?: string;
    columns: FooterColumn[];
    social?: FooterSocial[];
    copyright: string;
}
declare const FooterSection: React.ForwardRefExoticComponent<FooterSectionProps & React.RefAttributes<HTMLElement>>;

interface HowItWorksStep {
    step: number;
    title: string;
    description: string;
    icon?: string;
}
declare const sectionCva: (props?: ({
    variant?: "gray" | "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type HowItWorksVariant = 'light' | 'dark' | 'gray';
interface HowItWorksStepsProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionCva> {
    badge?: string;
    headline: string;
    subheadline?: string;
    steps: HowItWorksStep[];
}
declare const HowItWorksSteps: React.ForwardRefExoticComponent<HowItWorksStepsProps & React.RefAttributes<HTMLElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, AccordionItem, type AccordionItemProps, type AccordionProps, AccordionTrigger, Alert, AlertDescription, type AlertProps, AlertTitle, AspectRatio, type AspectRatioProps, Avatar, AvatarFallback, AvatarImage, type AvatarProps, Badge, type BadgeProps, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, type ButtonProps, CTABanner, type CTABannerProps, type CTABannerVariant, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselContent, CarouselIndicators, CarouselItem, CarouselNext, CarouselPrevious, type CarouselProps, Checkbox, type CheckboxProps, Dropdown, DropdownContent, type DropdownContentProps, DropdownItem, DropdownLabel, type DropdownProps, DropdownSeparator, DropdownTrigger, FAQAccordion, type FAQAccordionProps, type FAQItem, type FAQVariant, type FeatureItem, FeaturesGrid, type FeaturesGridProps, type FeaturesIconStyle, type FeaturesVariant, type FooterColumn, type FooterLink, FooterSection, type FooterSectionProps, type FooterSectionVariant, type FooterSocial, FormError, FormGroup, FormHint, HeroSection, type HeroSectionProps, type HeroVariant, type HowItWorksStep, HowItWorksSteps, type HowItWorksStepsProps, type HowItWorksVariant, Icon, type IconProps, Input, type InputProps, Label, LogoCloud, type LogoCloudProps, type LogoCloudVariant, type LogoItem, Modal, ModalBody, ModalDescription, ModalFooter, ModalHeader, type ModalProps, ModalTitle, Pagination, PaginationButton, type PaginationButtonProps, PaginationEllipsis, PaginationNext, PaginationPrevious, type PaginationProps, type PricingPlan, PricingSection, type PricingSectionProps, type PricingVariant, Progress, type ProgressProps, Radio, type RadioProps, Select, type SelectProps, Separator, type SeparatorProps, Skeleton, Spinner, type SpinnerProps, type StatItem, StatsSection, type StatsSectionLayout, type StatsSectionProps, type StatsSectionVariant, Switch, type SwitchProps, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, type TabsContentProps, TabsList, type TabsProps, TabsTrigger, type TabsTriggerProps, type TestimonialItem, TestimonialsCarousel, type TestimonialsCarouselProps, type TestimonialsLayout, type TestimonialsVariant, Textarea, type TextareaProps, Toast, type ToastData, type ToastPosition, type ToastProps, ToastProvider, type ToastProviderProps, Tooltip, TooltipContent, type TooltipContentProps, type TooltipProps, TooltipProvider, type TooltipProviderProps, TooltipTrigger, alertVariants, avatarVariants, badgeVariants, buttonVariants, cn, iconVariants, inputVariants, progressIndicatorVariants, spinnerVariants, textareaVariants, toastVariants, useToast };
