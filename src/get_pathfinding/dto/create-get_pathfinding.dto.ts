export class CurrentLocationDto {
  x: number;
  y: number;
  floor_id: number;
}

export class CreateGetPathfindingDto {
  current: CurrentLocationDto;
  destination_id: number;
}
