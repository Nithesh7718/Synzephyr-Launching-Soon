/**
 * Utility for the User Timing API to measure real-world performance.
 * These marks and measures appear in the Chrome DevTools Performance panel
 * and can be collected via Lighthouse or RUM tools.
 */

export const performanceMark = (name: string) => {
    if (typeof window !== "undefined" && window.performance && window.performance.mark) {
        window.performance.mark(name)
    }
}

export const performanceMeasure = (name: string, startMark: string, endMark: string) => {
    if (typeof window !== "undefined" && window.performance && window.performance.measure) {
        try {
            window.performance.measure(name, startMark, endMark)
        } catch (e) {
            // Silence errors if marks don't exist
        }
    }
}
