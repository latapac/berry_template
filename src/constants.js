export const mstatus = ['ABORTED', 'STOPPED', 'RESETTING', 'IDLE', 'EXECUTE'];

export function getMstatusBGColor(status) {
    switch (status) {
        case 'STOP':
            return 'bg-red-500';
        case 'RESETTING':
            return 'bg-yellow-500';
        case 'IDLE':
            return 'bg-green-500';
        case 'EXECUTE':
            return 'bg-green-700';
        case 'ABORTED':
            return 'bg-orange-300';
        default:
            return 'bg-gray-500';
    }
}