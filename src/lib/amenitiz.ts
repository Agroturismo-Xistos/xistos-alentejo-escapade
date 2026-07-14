/**
 * Parâmetros para construir uma URL de reserva na Amenitiz.
 */
export interface AmenitizBookingParams {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  adults: number;
  children: number;
}

const BASE_URL = "https://agroturismo-xistos.amenitiz.io/pt/booking/room";
const ANCHOR = "#RoomSelection-BE";

/**
 * Constrói a URL de reserva para o sistema Amenitiz.
 *
 * @example
 * buildAmenitizBookingUrl({
 *   startDate: "2026-07-24",
 *   endDate: "2026-08-03",
 *   adults: 2,
 *   children: 0,
 * });
 * // "https://agroturismo-xistos.amenitiz.io/pt/booking/room?start_date=2026-07-24&end_date=2026-08-03&adults=2&children=0#RoomSelection-BE"
 */
export function buildAmenitizBookingUrl(params: AmenitizBookingParams): string {
  const query = new URLSearchParams({
    start_date: params.startDate,
    end_date: params.endDate,
    adults: params.adults.toString(),
    children: params.children.toString(),
  });

  return `${BASE_URL}?${query.toString()}${ANCHOR}`;
}

/**
 * URL padrão do sistema de reservas (sem parâmetros de pesquisa).
 */
export const DEFAULT_BOOKING_URL = `${BASE_URL}${ANCHOR}`;
