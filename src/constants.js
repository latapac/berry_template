export const mstatus = ['ABORTED', 'STOPPED', 'RESETTING', 'IDLE', 'EXECUTE'];

export function getMstatusBGColor(status) {
    switch (status) {
        case 'STOP':
            return 'text-red-500';
        case 'RESETTING':
            return 'text-yellow-500';
        case 'IDLE':
            return 'text-green-500';
        case 'EXECUTE':
            return 'text-green-700';
        case 'ABORTED':
            return 'text-orange-400';
        default:
            return 'text-gray-500';
    }
}