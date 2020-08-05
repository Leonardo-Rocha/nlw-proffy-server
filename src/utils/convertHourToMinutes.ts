/**
 * Time in format HH:MM.
 * 
 * @param {string} time
 */
export default function convertHourToMinutes(time: string) {
  
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;
  
  return timeInMinutes;
}
