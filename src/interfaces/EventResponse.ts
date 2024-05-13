interface EventResponse {
  events: KillEvent[];
  skip: number;
  sync_delay: number;
  take: number;
}
