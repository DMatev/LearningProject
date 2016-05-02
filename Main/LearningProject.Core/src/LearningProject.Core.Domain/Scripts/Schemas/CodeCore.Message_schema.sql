USE [LearningProject]
GO
CREATE TABLE [CodeCore].[Message](
	[MessageCode] NVARCHAR(100) NOT NULL CONSTRAINT PK_MessageCode PRIMARY KEY ([MessageCode]),
	[RowRevision] ROWVERSION NOT NULL
);
