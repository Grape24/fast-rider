import moment from 'moment';

export const formatTime = (dateTimeString: string, formatType: string ): string=> {
    const formattedTime = moment(dateTimeString).format(formatType);
    return formattedTime;
}
