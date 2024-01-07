-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Routine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "objetive" TEXT NOT NULL,
    "initialDate" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Routine" ("id", "initialDate", "objetive", "status", "userId") SELECT "id", "initialDate", "objetive", "status", "userId" FROM "Routine";
DROP TABLE "Routine";
ALTER TABLE "new_Routine" RENAME TO "Routine";
CREATE TABLE "new_Serie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numbersOfTurns" INTEGER NOT NULL,
    "routineId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Serie_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Serie" ("id", "numbersOfTurns", "routineId", "status") SELECT "id", "numbersOfTurns", "routineId", "status" FROM "Serie";
DROP TABLE "Serie";
ALTER TABLE "new_Serie" RENAME TO "Serie";
CREATE TABLE "new_Ejercice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numbersOfRepetitions" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "serieId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Ejercice_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Ejercice" ("id", "name", "numbersOfRepetitions", "serieId", "status") SELECT "id", "name", "numbersOfRepetitions", "serieId", "status" FROM "Ejercice";
DROP TABLE "Ejercice";
ALTER TABLE "new_Ejercice" RENAME TO "Ejercice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
