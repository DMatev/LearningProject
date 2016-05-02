USE [LearningProject]
GO
IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'CodeCore')
	BEGIN
		EXEC ('CREATE SCHEMA CodeCore;');
	END;

IF NOT EXISTS (SELECT 1 FROM sys.schemas WHERE name = 'Core')
	BEGIN
		EXEC ('CREATE SCHEMA Core;');
	END;