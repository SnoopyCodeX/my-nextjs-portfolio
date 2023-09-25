export const validateString = (value: unknown, maxLength: number) => {
    return !(!value || typeof value !== 'string' || value.length > maxLength)
}

export const getErrorMessage = (error: unknown) => {
    let message: string

    if(error instanceof Error) {
        message = error.message
    } else if(error && typeof error === 'object' && 'message' in error) {
        message = String(error.message)
    } else if (typeof error === 'string')
        message = error
    else 
        message = "Something went wrong while sending email"

    return message
}

// a and b are javascript Date objects
export function dateDiffInYears(a: Date, b: Date): number {
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 30 * 12;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_YEAR);
}