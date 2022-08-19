import Database, { QueryResult } from 'tauri-plugin-sql-api';
import type { NewStamp, Stamp } from '../types/Stamp';

const db = await Database.load('sqlite:test.db').then((instance) => {
  return instance;
});

async function all(): Promise<Stamp[]> {
  await db;
  return await db.select(`SELECT * FROM stamps `);
}

async function create(newStamp: NewStamp): Promise<Stamp> {
  const { lastInsertId: id } = await db.execute(
    'INSERT INTO stamps (title, content, path) VALUES ($1, $2, $3)',
    [newStamp.title, newStamp.content, newStamp.path]
  );
  return {
    id,
    ...newStamp,
  };
}

async function update(stamp: Stamp): Promise<Stamp> {
  await db.execute('UPDATE stamps SET title = $1, content = $2 WHERE id = $3', [
    stamp.title,
    stamp.content,
    stamp.id,
  ]);
  return stamp;
}

async function remove(id: number): Promise<QueryResult> {
  return await db.execute('DELETE FROM stamps WHERE id = $1', [id]);
}

export default {
  all,
  create,
  update,
  remove,
};
