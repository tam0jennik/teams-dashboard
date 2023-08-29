export type UTCOffses =
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14;

export interface ITeamMate {
    name: string;
    utcOffset: UTCOffses,
    startWork: number,
    endWork: number,
    gaps: number[],
}
