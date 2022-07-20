export type Task = {
  id: string;
  name: string;
  labels: string[];
  isDone?: boolean;
  description?: string;
  deadlineDate?: Date;
};
