/*
  Warnings:

  - You are about to drop the `Ejercice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ejercice";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Exercice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numbersOfRepetitions" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "serieId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Exercice_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
