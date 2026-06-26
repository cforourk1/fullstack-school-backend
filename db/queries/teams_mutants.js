import db from "#db/client";

// add mutant to team
export async function createTeamMutant(teamId, mutantId) {
  const sql = `
  INSERT INTO teams_mutants (team_id, mutant_id)
  VALUES ($1, $2)
  RETURNING *
  `;
  const { rows: [teamMutant] } = await db.query(sql, [teamId, mutantId]);
  return teamMutant;
}

// remove mutant from team
export async function deleteTeamMutant(teamId, mutantId) {
  const sql = `
  DELETE FROM teams_mutants
  WHERE team_id = $1 AND mutant_id = $2
  RETURNING *
  `;
  const { rows: [teamMutant] } = await db.query(sql, [teamId, mutantId]);
  return teamMutant;
}