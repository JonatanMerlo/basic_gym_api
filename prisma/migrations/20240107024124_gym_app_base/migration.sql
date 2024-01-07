-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Routine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "objetive" TEXT NOT NULL,
    "initialDate" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Serie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numbersOfTurns" INTEGER NOT NULL,
    "routineId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Serie_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ejercice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numbersOfRepetitions" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "serieId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Ejercice_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
