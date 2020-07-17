export interface SignInView {
    showEmailError(message: string): void;
    showPasswordError(message: string): void;
    showError(message: string): void;
    goHome(): void;
}
