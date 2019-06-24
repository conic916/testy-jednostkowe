const formatDate = time => {

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = (time % 60);

    if (time == 0 || time == null) {
        return '0s';
    }
    if (time >= 3600 && seconds == 0 && minutes == 0) {
        return `${hours}h`
    }
    if (time >= 60 && time <= 3599 && seconds < 1) {
        return `${minutes}m`;
    }
    if (time >= 1 && time <= 59) {
        return `${seconds}s`;
    }
    if (time >= 60 && time <= 3599 && seconds >= 1) {
        return `${minutes}m ${seconds}s`;
    }
    if (time >= 3600 && minutes < 1) {
        return `${hours}h ${seconds}s`;
    }
    if (time >= 3600 && seconds == 0) {
        return `${hours}h ${minutes}m`;
    }
    if (time >= 3600 && minutes > 1) {
        return `${hours}h ${minutes}m ${seconds}s`;
    }
}

module.exports = formatDate;
  module.exports = formatDate;